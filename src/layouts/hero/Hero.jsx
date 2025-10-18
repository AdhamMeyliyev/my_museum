import { useEffect, useState } from 'react'
import './HeroStyle.scss'

const Hero = () => {
	const [locationName, setLocationName] = useState('Loading...')
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				async pos => {
					const { latitude, longitude } = pos.coords

					try {
						const res = await fetch(
							`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=435e2d76efd94d2281df127bd06bd3f3&language=uz`
						)
						const data = await res.json()
						if (data.results.length > 0) {
							const place = data.results[0].components
							const city =
								place.city
							// const country = place.country
							setLocationName(`${city ? city + ' ' : ''}`)
						} else {
							setLocationName('Location not found')
						}
					} catch (err) {
						console.error(err)
						setLocationName('Error loading location')
					}
				},
				err => {
					console.error(err)
					setLocationName('Permission denied')
				}
			)
		} else {
			setLocationName('Geolocation not supported')
		}
	}, [])
	return (
		<div className='container'>
			<div className='hero_main'>
				<h2 className='hero_first_title'>Explorer and Travel</h2>
				<h1 className='hero_second_title'>Let’s Go Now</h1>
				<p className='hero_desc'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ducimus
					tempore vel, doloribus tempora et ratione deserunt facere, culpa eaque
					dolor iure delectus. Nisi, harum accusantium quos voluptates quaerat
					blanditiis?
				</p>

				<div className='location_date_container'>
					<div className='location_wrapper'>
						<i class='fa-solid fa-location-dot'></i>
						<span className='location_title_wrapper'>
							<h3 className='location_top_title'>Location</h3>
							<h2 className='location_bottom_title'>{locationName}</h2>
						</span>
					</div>

					<div className='vertikal_line'></div>

					<div className='date_wrapper'>
						<i class='fa-solid fa-calendar'></i>
						<span className='location_title_wrapper'>
							<h3 className='location_top_title'>Date</h3>
							<h2 className='location_bottom_title'>Thailand</h2>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
