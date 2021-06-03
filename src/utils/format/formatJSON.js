export default function formatJSON(string) {
  if(string) {
    return splitByComma(
      removeDoubleComma(
        removeDoubleDots(
          removeNumbers(
            removeKeys(string)
          )
        )
      )
    );
  }
}

const splitByComma = (string) => string.split(",");
const removeDoubleDots = (string) => string.replaceAll(":", "");
const removeNumbers = (string) => string.replaceAll(/[0-9]/g, "");
const removeDoubleComma = (string) => string.replaceAll(/"/g, "");
const removeKeys = (string) => string.replace("{", "").replace("}", "");