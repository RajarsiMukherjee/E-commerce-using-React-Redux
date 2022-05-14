import React from 'react'
import "./Success.css"
import { useNavigate } from 'react-router-dom';
export default function Success() {
    const navigate = useNavigate()
    return (
        <div className='body'>
            <div className='card'>
                <div>
                    <p className='checkmark'>✓</p>
                </div>
                <h1>Success</h1>
                <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
                <div className='homepage' onClick={() => navigate("/")}><p>Back to Home</p></div>
            </div>
        </div>
    )
}
