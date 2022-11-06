import styles from "./layout.module.css"
import Navigation from "./Navigation"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className={styles.body}>
        <Navigation />

        {children}
      </body>
    </html>
  )
}
