import makeApp from './app'

const port = 3002;

const app = makeApp()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
