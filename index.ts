function greet(name?: string): string | undefined {
  if (name) {
    return `Hello, ${name}!`;
  }
}
