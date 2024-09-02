if (!process.env.SECRET_A) {
	throw new Error('no secret!')
}

console.info({
	a: process.env.SECRET_A.length,
	a2: `Helloooxxxoo: ${process.env.SECRET_A}`
})
