/*eslint-disable*/
import React from 'react';
import 'antd/dist/antd.css';
import Flights from '../data';
import { Tabs, Row, Space, Button, DatePicker, Select, Typography, Slider } from 'antd';
import moment from 'moment';
const plane = require('../assets/aircraft.png');
const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;
let all_departure_cities = [];
let all_arrival_cities = [];
Flights.forEach(item => {
    let departureCity = /[^/]*$/.exec(item.departure.timezone)[0];
    item.departure.city = departureCity;
    all_departure_cities.push(departureCity);

    let arrivalCity = /[^/]*$/.exec(item.arrival.timezone)[0];
    item.arrival.city = arrivalCity;
    all_arrival_cities.push(arrivalCity);
    item.amount = Math.floor(Math.random() * (999 - 100 + 1) + 100);
})
all_departure_cities = [...new Set(all_departure_cities)]
all_arrival_cities = [...new Set(all_arrival_cities)]
const disabledPrevDate = (current) => {
    // Can not select days before today
    return current && current < moment().startOf('day');
}
export default () => {
    const [originCity, setOriginCity] = React.useState('');
    const onOriginCityChange = value => {
        setOriginCity(value);
    };
    const [destinationCity, setDestinationCity] = React.useState('');
    const onDestinationCityChange = value => {
        setDestinationCity(value);
    }
    const [passengers, setPassengers] = React.useState('');
    const onPassengersChange = value => {
        setPassengers(value);
    }
    const [flightResults, setFlightResults] = React.useState([]);
    const [returnFlightResults, setReturnFlightResults] = React.useState([]);
    const [departureDate, setDepartureDate] = React.useState('');
    const [returnDate, setReturnDate] = React.useState('');
    const [showOneWay, setShowOneWay] = React.useState(false);
    const [showReturn, setShowReturn] = React.useState(false);
    const [minPrice, setMinPrice] = React.useState(200);
    const [maxPrice, setMaxPrice] = React.useState(999);
    const onDepartureChange = (value) => {
        if (value) {
            const { _d } = value;
            setDepartureDate(_d.toISOString().slice(0, 10));
        }
    }
    const onReturnChange = (value) => {
        if (value) {
            const { _d } = value;
            setReturnDate(_d.toISOString().slice(0, 10));
        }
    }
    const onOneWaySearch = () => {
        let myFlights = Flights.filter(flight => {
            return (flight.departure.city === originCity && flight.arrival.city === destinationCity && flight.flight_date === departureDate)
        })
        setReturnFlightResults([]);
        setFlightResults(myFlights);
        setShowOneWay(true);
        console.log("FLIGHTS:", myFlights)
    }
    const onReturnSearch = () => {
        let myFlights = Flights.filter(flight => {
            return (flight.departure.city === originCity && flight.arrival.city === destinationCity)
        })
        let myReturnFlights = Flights.filter(flight => {
            return (flight.departure.city === destinationCity && flight.arrival.city === originCity && flight.flight_date === returnDate)
        })
        if (undefined !== myReturnFlights && myReturnFlights.length) {
            setReturnFlightResults(myReturnFlights[0]);
            setFlightResults(myFlights);
            setShowReturn(true);
        }
        else {
            setReturnFlightResults([]);
            setFlightResults([]);
        }
        console.log("RETURN FLIGHTS:", myFlights, myReturnFlights)
    }
    const onSliderChange = (value) => {
        console.log("value1: ", value[0], "value2: ", value[1]);
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
    }
    return (
        <Space direction="vertical">
            <Row justify="flex-start">
                <Tabs type="card">
                    <TabPane tab="One way" key="1">
                        <Space direction="vertical" style={{ justifyContent: 'flex-start' }}>
                            <Select placeholder="Select origin city" onChange={onOriginCityChange} style={{ width: '100%' }}>
                                {
                                    all_departure_cities.map(city => <Option key={city} value={city}>{city}</Option>)
                                }
                            </Select>
                            <Select placeholder="Select destination" onChange={onDestinationCityChange} style={{ width: '100%' }}>
                                {
                                    all_arrival_cities.map(city => <Option key={city} value={city}>{city}</Option>)
                                }
                            </Select>
                            <DatePicker disabledDate={disabledPrevDate} placeholder="Departure date" format={'YYYY/MM/DD'} style={{ width: '100%' }} onChange={onDepartureChange} />
                            <Select placeholder="Passengers" onChange={onPassengersChange} style={{ width: '100%' }}>
                                {
                                    [...Array(10).keys()].map(x => <Option key={x++} value={x++}>{x++}</Option>)
                                }
                            </Select>
                            <Button type="primary" style={{ width: '100%' }} onClick={onOneWaySearch}>Search</Button>
                            <Text style={{ textAlign:'center'}}>Refine flight search</Text>
                            <Slider range min={100} max={1000} defaultValue={[200, 999]} onChange={onSliderChange} />
                        </Space>
                    </TabPane>
                    <TabPane tab="Return" key="2">
                        <Space direction="vertical" style={{ justifyContent: 'flex-start' }}>
                            <Select placeholder="Select origin city" onChange={onOriginCityChange} style={{ width: '100%' }}>
                                {
                                    all_departure_cities.map(city => <Option key={city} value={city}>{city}</Option>)
                                }
                            </Select>
                            <Select placeholder="Select destination" onChange={onDestinationCityChange} style={{ width: '100%' }}>
                                {
                                    all_arrival_cities.map(city => <Option key={city} value={city}>{city}</Option>)
                                }
                            </Select>
                            <DatePicker disabledDate={disabledPrevDate} placeholder="Departure date" format={'YYYY/MM/DD'} style={{ width: '100%' }} onChange={onDepartureChange} />
                            <DatePicker disabledDate={disabledPrevDate} placeholder="Return date" format={'YYYY/MM/DD'} style={{ width: '100%' }} onChange={onReturnChange} />
                            <Select placeholder="Passengers" onChange={onPassengersChange} style={{ width: '100%' }}>
                                {
                                    [...Array(10).keys()].map(x => <Option key={x++} value={x++}>{x++}</Option>)
                                }
                            </Select>
                            <Button type="primary" style={{ width: '100%' }} onClick={onReturnSearch}>Search</Button>
                            <Text style={{ textAlign:'center'}}>Refine flight search</Text>
                            <Slider range min={100} max={1000} defaultValue={[200, 999]} onChange={onSliderChange} />
                        </Space>
                    </TabPane>
                </Tabs>
                <Space direction="vertical" style={{ width: 600 }}>
                    {(showOneWay) ? <Space direction="horizontal" style={{ width: '100%', background: '#fafafa', justifyContent: "space-between", padding: 5, margin: '10px 10px -15px 10px' }}>
                        <Title level={3}>{`${originCity} > ${destinationCity}`}</Title>
                        <Text>Depart: {departureDate}</Text>
                    </Space> : null}
                    {
                        (showOneWay) ? flightResults.map(flight => {
                            if(flight.amount >= minPrice && flight.amount <= maxPrice)
                            return <Space direction="horizontal" key={flight.flight.number} style={{ width: '100%', background: '#fafafa', justifyContent: "space-between", padding: 18, margin: 10 }}>
                                <Space direction="vertical" style={{ width: 300 }}>
                                    <Text>Airlines: {flight.airline.name}</Text>
                                    <Title level={3}>€{passengers ? passengers * flight.amount + " for " + passengers : flight.amount}</Title>
                                    <Space direction="vertical">
                                        <Title level={5}>{`${flight.departure.iata} > ${flight.arrival.iata}`}</Title>
                                        <Text>Flight: {flight.flight.icao}</Text>
                                        <Text>{`Departure: ${new Date(flight.departure.scheduled).toLocaleTimeString()} (${originCity})`}</Text>
                                        <Text>{`Arrival: ${new Date(flight.arrival.scheduled).toLocaleTimeString()} (${destinationCity})`}</Text>
                                    </Space>
                                </Space>
                                <Space direction="vertical" style={{ width: 129 }}>
                                    <img src={plane} alt="" style={{ width: 129, height: 129 }} />
                                    <Button type="primary">Book this flight</Button>
                                </Space>
                            </Space>
                        }) : null
                    }
                    {(showReturn) ? <Space direction="horizontal" style={{ width: '100%', background: '#fafafa', justifyContent: "space-between", padding: 5, margin: '10px 10px -15px 10px' }}>
                        <Title level={3}>{`${originCity} > ${destinationCity} > ${originCity}`}</Title>
                        <Text>Depart: {departureDate}</Text>
                        <Text>Return: {returnDate}</Text>
                    </Space> : null}
                    {
                        (showReturn) ? flightResults.map(flight => {
                            let amount1 = passengers ? passengers * flight.amount : flight.amount;
                            let amount2 = passengers ? passengers * returnFlightResults.amount : returnFlightResults.amount;
                            let totalPrice = parseInt(amount1) + parseInt(amount2);
                            console.log("Total price: ", totalPrice)
                            if(flight.amount >= minPrice && flight.amount <= maxPrice)
                            return <Space direction="horizontal" key={flight.flight.number} style={{ width: '100%', background: '#fafafa', justifyContent: "space-between", padding: 18, margin: 10 }}>
                                <Space direction="vertical" style={{ width: 300 }}>
                                    <Text>Airlines: {flight.airline.name}</Text>
                                    <Title level={3}>€{totalPrice}</Title>
                                    <Space direction="horizontal">
                                        <Space direction="vertical">
                                            <Title level={5}>{`${flight.departure.iata} > ${flight.arrival.iata}`}</Title>
                                            <Text>Flight: {flight.flight.icao}</Text>
                                            <Text>{`Departure: ${new Date(flight.departure.scheduled).toLocaleTimeString()} (${originCity})`}</Text>
                                            <Text>{`Arrival: ${new Date(flight.arrival.scheduled).toLocaleTimeString()} (${destinationCity})`}</Text>
                                        </Space>
                                        <Space direction="vertical">
                                            <Title level={5}>{`${returnFlightResults.departure.iata} > ${returnFlightResults.arrival.iata}`}</Title>
                                            <Text>Flight: {returnFlightResults.flight.icao}</Text>
                                            <Text>{`Departure: ${new Date(returnFlightResults.departure.scheduled).toLocaleTimeString()} (${originCity})`}</Text>
                                            <Text>{`Arrival: ${new Date(returnFlightResults.arrival.scheduled).toLocaleTimeString()} (${destinationCity})`}</Text>
                                        </Space>
                                    </Space>
                                </Space>
                                <Space direction="vertical" style={{ width: 129 }}>
                                    <img src={plane} alt="" style={{ width: 129, height: 129 }} />
                                    <Button type="primary">Book this flight</Button>
                                </Space>
                            </Space>
                        }) : null
                    }
                    {
                        (false === showOneWay && false === showReturn) ? <Title level={1}>Select Origin and Destiny for a date to check fares.</Title> : null
                    }
                </Space>
            </Row>
            <Space direction="vertical" style={{ marginTop: 24 }}>
                <Title level={4}>All scheduled flights :-</Title>
                <Text>Note: Due to pandemic only the following flights are scheduled and the prices are uncertain.</Text>
                {
                    Flights.map(flight => {
                        return <Space key={flight.flight.iata} direction="horizontal" style={{ width: '100%', background: '#fafafa', justifyContent: "space-between", padding: 5, margin: '-15px 10px -15px 10px' }}>
                            <Text>Date: {flight.flight_date}</Text>
                            <Title level={5}>{`${flight.departure.city} > ${flight.arrival.city}`}</Title>
                            <Text>Price: €{flight.amount}</Text>
                        </Space>
                    })
                }
            </Space>
        </Space>
    )
}