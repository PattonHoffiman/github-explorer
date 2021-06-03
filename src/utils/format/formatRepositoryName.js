export default function formatRepositoryName(name) {
  if(name) {
    return removeSeparator(name);
  }
}

const removeSeparator = (string) => string.replaceAll("-", " ");