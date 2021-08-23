import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/overview.css"
import { warningsMessages } from "../enums/warnings"
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardContent, Typography, CardActionArea, CardMedia } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        textAlign : "right",
        maxWidth: 500,
        height: 200
    },
    media: {
        textAlign : "center",
        height: 140,
    },
    content :{
        height : "100%"
    }

});
const Overview = () => {
    const classes = useStyles();

    return (
        <section className="overview">
            <div className="container p-5 bg-dark">
                <div className="row">
                    <Slider
                        dots={false}
                        slidesToShow={2}
                        slidesToScroll={1}
                        autoplay={false}
                        autoplaySpeed={1000}
                    >
                        {warningsMessages.map(messages => (
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <div className="row h-100">
                                        <div className="col-8">
                                            <Typography>
                                                توجه
                                            </Typography>
                                            <hr />
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {messages.msg}
                                            </Typography>
                                        </div>
                                        <div className="col-4 d-flex ">
                                            <CardMedia classname={classes.media}>
                                                <span className="icon">
                                                    <FontAwesomeIcon className="lightBulb" icon={faLightbulb} size="5x" />
                                                </span>
                                            </CardMedia>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Overview