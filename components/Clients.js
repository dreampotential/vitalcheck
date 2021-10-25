import Image from 'next/image'
import check from "../Images/latest/check.png"
const Clients = () => {
    return (
        <div className = "clients">
            <div className = "clients_body">
                <div className = "client_tick">
                    <Image src = {check} width = {30} height = {25} />
                </div>
                <p className = "client_label">OUR CLIENTS</p>
                <p className = "nationwide">Serving clients nationwide.</p>
                <p className = "client_desc">We serve a diverse group of clients of all sizes from different industries across the United States, including financial institutions, educational institutions, industrial companies, sports organizations, law firms, and others.</p>
                <div className = "client_numbers">
                    <div className = "client_companies"></div>
                    <div className = "client_patients"></div>
                </div>
            </div>
        </div>
    )
}
export default Clients;