export function filterContactsByNameOrNumber(contactList, filter) {
  filter = filter.toLowerCase();

  return contactList.filter((contact) => {
    const nameInLowercase = contact.name.toLowerCase();
    const Phones = contact.phones.map((phoneObj) => phoneObj.phone);

    return (
      nameInLowercase.includes(filter) ||
      Phones.some((phone) => phone.includes(filter))
    );
  });
}
