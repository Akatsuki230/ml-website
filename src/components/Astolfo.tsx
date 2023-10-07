import { motion } from "framer-motion"

export default function Astolfo() {
    const openSocial = () => {
        location.href = '/social'
    }

    return (
        <div onClick={openSocial} className="fixed bottom-0 right-0">
            <motion.img
                initial={{ height: '12rem' }}
                whileHover={{ height: '14rem' }}
                src="/cuteboy.png" />
        </div>
    )
}