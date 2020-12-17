import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"
import "./InfoBox.css"

function InfoBox({title, cases, active,total, lastUpdate, ...props}) {
    return (
        <Card className="infoBox">
             <CardContent>
                {/*Title */}
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                {/*+120k Number of cases */}
                <h2 className="infoBox__cases">{cases}</h2>

                {/** 1.2 Total */}
                <Typography className="infoBox__total" color="textSecondary">{total} Total</Typography>

                {/** last Update for death */}
                <Typography className="infoBox__dateUpdate">{new Date().toDateString()}</Typography>
             </CardContent>
        </Card>

    )
}
export default InfoBox
