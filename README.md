# Price comparison for energy plans

Basic app that displays results from DComparison Technologies API sorted by price.

## Technologies
* React
* Fetch API

## Challenges
The main challenges I faced were getting useEffect to work - I had to add [] as a 2nd argument to stop an infinite loop.
I also had trouble testing the components so only managed to do one test (the title).
If I had more time, I would implement the additional goals, letting the user sort by payment method, Big Six, and exit fees. I would approach this by rendering a form that lets the user choose how they want to filter the results. I would then set their input to state and conditionally sort the results in the .sort before the .map based on their choice.