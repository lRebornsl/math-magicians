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


