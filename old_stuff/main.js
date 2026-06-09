const card = document.querySelector('.card');
const cardContent = document.querySelector('.card__content');
const overlay = document.querySelector('.overlay');
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 6)+"px; left: "+(e.pageX - 5)+"px;")
})

document.addEventListener('DOMContentLoaded', () => {

    let timeline = new TimelineMax();
    timeline
    	.from('.logo-title', .8,{
	    	delay: 2,
	    	top: '50%',
	    	fontSize: '90px',
    	})
    	.to('.overlay', .5,{
	    	height: 0
    	}, '-=.5')
    	.from('.card', .5, {
	    	delay: .44,
	    	y: '-200',
    	})
});


