if (!process.env.SECRET_A) {
	throw new Error('no secret!')
}

console.info({
	a: process.env.SECRET_A.length,
	a2: `Helloooxxxoaaao: ${process.env.SECRET_A}`
})
