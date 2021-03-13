import React from 'react'
import { Button } from 'react-bootstrap'
import styles from"../styles/app.module.css"

export default function index() {
    return (
        <div className={styles.home}>
            <h1>Hello</h1>
            <div className={styles.homeButtons}>
            <Button>
                Add
            </Button>
            <Button>
                Subtract
            </Button>
            </div>
        </div>
    )
}
