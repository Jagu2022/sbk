import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

    const [open, setopen] = useState(true)
    
    const handleChange = (editor, data, value) => {
        onChange(value)
    }
  return (
    <div className={`editor_container ${open ? '' : 'collapsed'}`}>
        <div className='editor_title'>
            {displayName}
            <button type='button' className='btn' onClick={()=>{setopen(!open)}}>
                {open ? <CloseFullscreenIcon/> : <OpenInFullIcon/>}
            </button>
        </div>
        <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className='code_mirror_wrapper'
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                lineNumbers: true,
                theme: 'material'
            }}
        />
    </div>
  )
}

export default Editor