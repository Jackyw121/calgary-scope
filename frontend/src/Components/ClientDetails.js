const ClientDetails = ({ client}) => {
    return (
        <div className="client-details">
            <h4>{client.details}</h4>
            <p><strong>Name: </strong>{client.name}</p>
            <p><strong>Email: </strong>{client.email}</p>
            <p><strong>Phone: </strong>{client.phone}</p>
            <p>{client.createdAt}</p>
        </div>
    )
}

export default ClientDetails