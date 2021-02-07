import React from 'react'
import './Restaurants.css'
import { Card, Grid, CardContent, Typography, CardActionArea } from '@material-ui/core'

const Restaurant = (props) => {
  const [restaurants, setRestaurants] = React.useState([])

  React.useEffect(() => {
    console.log(props.lat, props.long)
    console.log(window.location)
    if (props.lat && props.long) {
      console.log('Grabbing Data')
      fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${props.lat}&lon=${props.long}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'user-key': '1221e5d244691df20f45ba25f94987f2',
        })
      })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          setRestaurants(json.nearby_restaurants)
        })
        .catch(err => console.log(err))
    }
  }, 
  [props.lat, props.long])


  return (
     <Grid
    container
    direction="row"
    justify="right"
    alignItems="left"
  >
      {
        restaurants.map((location, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{ margin: '5%', backgroundColor: '#6FD5D2', color: '#255694',}}>
                <CardContent>
                  <Typography variant='h4'><a className='link-color' href={location.restaurant.photos_url} target='blank'>{location.restaurant.name}</a></Typography>       
                  <Grid container>
                    <Grid item md={7} style={{ textAlign: 'center' }}>
                        <br />
                      <Typography variant='body3'>{location.restaurant.currency} {location.restaurant.average_cost_for_two} <br /> {location.restaurant.cuisines}</Typography>
                    </Grid>
                    <Grid item md={5} style={{ textAlign: 'center' }}>
                    <br />
                      <Typography variant="body3">{location.restaurant.user_rating.aggregate_rating} Restaurant Rating  <br /> {location.restaurant.user_rating.votes} Votes</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <hr />
                <CardActionArea style={{marginBottom: '5%'}}>
                <br />
                  <Typography variant="body1">{location.restaurant.location.address}</Typography>
                </CardActionArea>
                
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
  )
}
export default Restaurant

