<div class="hero">
	<div>
		<h1>Hi i'm Jacob, a <b>web dev</b></h1>
		<p>spending my days writing good software badly.</p>
	</div>
	<span class="wave" aria-label="wave">👋</span>
</div>

<style>
	.hero {
		margin-top: 250px;
		margin-bottom: 250px;
		position: relative;
		max-width: 420px;
		padding: 8px;
	}
	span {
		position: absolute;
		font-size: 3rem;
		padding-right: 10px;
		right: 3%;
		top: 50%;
	}
	h1 {
		font-size: 4rem;
		font-weight: 600;
		margin: 0px;
	}

	h1 > b {
		color: var(--primary);
	}
	p {
		margin-top: 4px;
		max-width: 350px;
		width: 100%;
	}

	.wave {
		animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
		animation-duration: 2.5s; /* Change to speed up or slow down */
		animation-iteration-count: infinite; /* Never stop waving :) */
		transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
		display: inline-block;
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		} /* The following five values can be played with to make the waving more or less extreme */
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		} /* Reset for the last half to pause */
		100% {
			transform: rotate(0deg);
		}
	}

	@media (max-width: 400px) {
		.hero {
			display: flex;
			flex-direction: column-reverse;
			align-items: center;
			text-align: center;
		}

		h1 {
			font-size: 3rem;
		}

		span {
			position: unset;
		}
	}
</style>
