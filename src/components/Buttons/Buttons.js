import styles from "./Buttons.module.css"

const Buttons = () => {
    return (
        <div className={styles.btnContainer}>
            <button className={styles.login_button}>Log in</button>
            <button className={styles.join_button}>JOIN</button>
            <button className={styles.discord_button}>Open Discord</button>
        </div>
    );
}

export default Buttons;