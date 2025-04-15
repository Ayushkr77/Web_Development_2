import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        <PostComponent />
        <PostComponent />
        <PostComponent />
      </div>
    </div>
  )
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  borderStyle: "solid", 
  padding: 10, 
}

function PostComponent() { // React components must start with an uppercase letter
  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src='https://s3.amazonaws.com/images.seroundtable.com/google-canonicals-1530101061.jpg'
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            objectFit: "cover"
          }}
          alt="profile"
        />
        <div style={{ fontSize: 14, marginLeft: 10, color: "#2d3436" }}>
          <b style={{ fontSize: 16 }}>100xDevs</b>
          <div>23,888 followers</div>
          <div>12m</div>
        </div>
      </div>
    </div>
  )
}

export default App
