# Experiment 004: Inside a tiny network

Move two signals through a small neural network and watch its hidden units
activate. Every number and animation on the page comes from the network's
forward pass.

**Live site:** <https://yahyanaveed10.github.io/experiment-004-neuron-activations/>

The network has two inputs, two ReLU hidden units, and one output. Its weights
are hand-set, not trained. It computes the absolute difference between A and B:

```text
hidden 1 = max(0, A - B)
hidden 2 = max(0, B - A)
output   = hidden 1 + hidden 2
```

At the four binary inputs, it gives the XOR pattern: zero when the inputs match,
one when they differ. The sliders also show values between zero and one.

## Run locally

```bash
python3 -m http.server 4176 --bind 127.0.0.1
```

Open <http://127.0.0.1:4176/>. There are no packages, API keys, model downloads,
or build steps.

## Check

```bash
node --check app.mjs
node --test network.test.mjs
```

See [research.md](research.md) for the source dates and what this toy model can
and cannot explain.

## License

MIT.
