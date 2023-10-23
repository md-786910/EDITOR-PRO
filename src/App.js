import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Editor_Plot from './page/Editor_Plot'
import Editor1 from './page/Editor1'

function App() {
    return (
        <>

            <Routes>

                <Route path="/" element={<Editor_Plot />} />
                <Route path="/editor1" element={<Editor1 />} />

            </Routes>
        </>
    )
}

export default App