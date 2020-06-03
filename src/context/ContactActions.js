export function addContact(contact)
{
    return {
    type:'ADD_CONTACT',
    payload:contact
    }
}

export function deleteContact(Id)
{
    return {
    type:'DELETE_CONTACT',
    payload:Id
    }
}

export function updateContact(contact)
{
    return {
        type:'UPDATE_CONTACT',
        payload:contact
        }

}