import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import Calculator from "./calculator";



describe('Test Calculator Page', () => {
    

    test('Calculator Page should show Let‘s do some math!', () => {
        render(<Calculator />)
        expect(screen.getByText("Let‘s do some math!")).toBeInTheDocument()

    })

    test('Calculator shoud have a button AC', () => {
        render(<Calculator />)
        expect(screen.getByText('Let‘s do some math!')).toBeInTheDocument()
    })

    test('Calculator shoud have a button +', () => {
        render(<Calculator />)
        expect(screen.getByText('+')).toBeInTheDocument()
    })

})