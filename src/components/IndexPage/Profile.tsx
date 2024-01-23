import styles from '@/styles/profile.module.scss';


export default function Profile() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.profilebox}>
                    <div>
                        <img src="/pfp.webp" alt="profile" width={150} height={150} />
                    </div>
                    <div>
                        <span>mldkyt</span>
                        <br />
                        <span>she/her 🏳️‍⚧️</span>
                        <br />
                        <span>A trans girl that writes code.</span>
                    </div>
                </div>
            </div>
            <div className={styles.bottomsliver}></div>
        </>
    )
}
