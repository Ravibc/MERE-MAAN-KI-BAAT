import { Button } from '@material-ui/core'
import React from 'react'
import { auth } from '../firebase'
import 'firebase/auth'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={()=> auth.signOut()} variant="contained" color="secondary">Sign Out</Button>
        </div>
    )
}

export default SignOut
