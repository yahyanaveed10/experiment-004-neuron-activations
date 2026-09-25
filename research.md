# Research basis and limits

Checked on 25 September 2026.

- [Carter et al., *Exploring Neural Networks with Activation Atlases*](https://distill.pub/2019/activation-atlas/), Distill, 6 March 2019, shows how looking at activations can make a model's internal behavior easier to explore. Their work studies a trained image model. This experiment uses a much smaller hand-set network.
- [Bricken et al., *Towards Monosemanticity*](https://transformer-circuits.pub/2023/monosemantic-features), Transformer Circuits, 4 October 2023, gives evidence that a single neuron in a language model can respond to several unrelated patterns. That is why this page does not label a neuron as a human concept.

## What is shown

The site computes two weighted sums, applies `max(0, value)` to each, then adds
the results. The bars show the actual values returned by the code. The staged
highlight is an animation of this forward pass, not a measurement from MiniLM.

The weights are `+1` and `-1`, with zero bias. They were chosen by hand so the
network is small enough to inspect. The network has no language understanding,
has not been trained, and says nothing about what a neuron in a large model
"means." It only demonstrates what an activation value is and how values move
through layers.
