import React, { useState } from 'react'

import Home from './Home'

export default function HomeContainer() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    return (
        <Home 
            title={title}
            text={text}
            onTitleChange={(value) => setTitle(value)}
            onTextChange={(value) => setText(value)}
        />
    )
}