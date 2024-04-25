import React from "react"
import { View } from "react-native"
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"

const TelaMedida = () => {

    let [cm, setCm] = React.useState(0)
    let [m, setM] = React.useState(0)
    let [km, setKm] = React.useState(0)

    const conversorCm = (value) => {
        setCm(value)
        let medidaM = (value) / 100
        let medidaKm = (value) / 10000
        setM(medidaM.toFixed(2))
        setKm(medidaKm.toFixed(2))
    }

    const conversorM = (value) => {
        setM(value)
        let medidaCm = (value) * 100
        let medidaKm = (value) / 1000
        setCm(medidaCm)
        setKm(medidaKm)
    }

    const conversorKm = (value) => {
        setKm(value)
        let medidaM = (value) * 1000
        let medidaCm = (value) * 10000
        setM(medidaM)
        setCm(medidaCm)
    }
    return (
        <View>
            <CampoTextoCustomizado label='centimetros' value={cm} onChangeText={conversorCm} />
            <CampoTextoCustomizado label='metros' value={m} onChangeText={conversorM} />
            <CampoTextoCustomizado label='kilometros' value={km} onChangeText={conversorKm} />
        </View>
    )
}
export default TelaMedida