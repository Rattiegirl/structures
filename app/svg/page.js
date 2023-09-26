"use client"
import { useEffect, useState } from "react";

const SvgPage = () => {
    const [rightPaw, setRightPaw] = useState('137');
   // const rightPaw = "137.118"
   useEffect(()=>{
    setInterval(()=>{
        setRightPaw(rightPaw => rightPaw === '150' ? '137' : '150')
    }, 500)
   }, [])
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="209"
          height="321"
          fill="none"
          viewBox="0 0 209 321"
        >
          <g>
            <ellipse
              cx="110.067"
              cy="198.619"
              fill="#FFD4AC"
              rx="93.277"
              ry="108.338"
            ></ellipse>
            <ellipse
              cx="109.134"
              cy="109.341"
              fill="#FFDDBD"
              rx="73.689"
              ry="75.234"
            ></ellipse>
            <g>
              <ellipse
                cx={rightPaw}
                cy="204.637"
                fill="#FFACAC"
                rx="12.126"
                ry="14.044"
              ></ellipse>
            </g>
            <g>
              <ellipse
                cx="148.311"
                cy="306.956"
                fill="#FF8080"
                rx="17.723"
                ry="14.044"
              ></ellipse>
              <ellipse
                cx="148.311"
                cy="306.956"
                fill="#FF8080"
                rx="17.723"
                ry="14.044"
              ></ellipse>
              <ellipse
                cx="148.311"
                cy="306.956"
                fill="#FFACAC"
                rx="17.723"
                ry="14.044"
              ></ellipse>
            </g>
            <g>
              <ellipse
                cx="81.151"
                cy="306.956"
                fill="#FF8080"
                rx="17.723"
                ry="14.044"
              ></ellipse>
              <ellipse
                cx="81.151"
                cy="306.956"
                fill="#FF8080"
                rx="17.723"
                ry="14.044"
              ></ellipse>
              <ellipse
                cx="81.151"
                cy="306.956"
                fill="#FFACAC"
                rx="17.723"
                ry="14.044"
              ></ellipse>
            </g>
            <g>
              <ellipse
                cx="97.942"
                cy="204.637"
                fill="#FF8080"
                rx="12.126"
                ry="14.044"
              ></ellipse>
              <ellipse
                cx="97.942"
                cy="204.637"
                fill="#FF8080"
                rx="12.126"
                ry="14.044"
              ></ellipse>
              <ellipse
                cx="97.942"
                cy="204.637"
                fill="#FFACAC"
                rx="12.126"
                ry="14.044"
              ></ellipse>
            </g>
            <path
              fill="#FFD4AC"
              d="M174.249 33.273c5.445-.424 9.479 5.16 7.75 10.73L171.382 78.22c-1.964 6.33-9.705 7.85-13.464 2.646L135.081 49.25c-3.76-5.204-.476-12.894 5.713-13.375l33.455-2.603z"
            ></path>
            <path
              fill="#FFD4AC"
              d="M34.751 43.304c-5.445-.424-9.479 5.16-7.75 10.73L37.617 88.25c1.964 6.33 9.704 7.85 13.464 2.646L73.92 59.282c3.76-5.204.476-12.893-5.713-13.375l-33.455-2.603z"
            ></path>
            <ellipse
              cx="93.277"
              cy="112.35"
              fill="#000"
              rx="9.328"
              ry="10.031"
            ></ellipse>
            <ellipse
              cx="134.32"
              cy="112.35"
              fill="#000"
              rx="9.328"
              ry="10.031"
            ></ellipse>
            <ellipse
              cx="97.008"
              cy="106.331"
              fill="#fff"
              rx="1.866"
              ry="2.006"
            ></ellipse>
            <ellipse
              cx="136.185"
              cy="106.331"
              fill="#fff"
              rx="1.866"
              ry="2.006"
            ></ellipse>
            <path
              fill="#FFACAC"
              d="M114.731 162.506l13.733-18.056h-27.466l13.733 18.056z"
            ></path>
          </g>
        </svg>
      );
}


export default SvgPage