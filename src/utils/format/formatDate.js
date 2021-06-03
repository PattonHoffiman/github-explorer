export default function formatDate(string) {
  if(string) {
    return organizeDate(
      separateByType(
        getOnlyDate(string)
      )
    );
  }
}

const separateByType = (string) => string.split('-');
const getOnlyDate = (string) => string.substring(0,10);
const organizeDate = (date) => `${date[2]}/${date[1]}/${date[0]}`;