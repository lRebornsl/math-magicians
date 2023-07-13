// import Testing Libraries
import "@testing-library/jest-dom"; 
import { render, screen } from "@testing-library/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import userEvent from '@testing-library/user-event'

// import components to be tested

import Navbar from "./navbar"
import Calculator from "./calculator"
import Home from "./home"
import Quote from "./functions/quotes"


describe('Test Navigation Bar', () => {
    test("Navigation should include Home, Calculator and Quote", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        )

        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Calculator')).toBeInTheDocument()
        expect(screen.getByText('Quote')).toBeInTheDocument()
    })

    test('Click on "Calculator" should Display Calculator Page', () => {
        render(
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="calculator" element={<Calculator />} />
                        <Route path="quote" element={<Quote />} />
                    </Routes>
                </div>
            </BrowserRouter>
        )
        userEvent.click(screen.getByText('Calculator'))

        expect(screen.getByText('AC')).toBeInTheDocument()
        expect(screen.getByText('+')).toBeInTheDocument()
        expect(screen.getByText('-')).toBeInTheDocument()
        expect(screen.getByText('=')).toBeInTheDocument()
        expect(screen.getByText('x')).toBeInTheDocument()
        expect(screen.getByText('÷')).toBeInTheDocument()

    })

    test('Click on "Home" should display Home Page', () => {
        render(
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="calculator" element={<Calculator />} />
                        <Route path="quote" element={<Quote />} />
                    </Routes>
                </div>
            </BrowserRouter>
        )

        userEvent.click(screen.getByText('Home'))

        expect(screen.getByText('Welcome to our page!')).toBeInTheDocument()
    })

})
