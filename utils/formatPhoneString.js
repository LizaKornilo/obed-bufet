export default function formatPhoneString(phone) {
  return phone.replace(/[^0-9\+]/gi, ''); //remove everything except numbers and pluses
}