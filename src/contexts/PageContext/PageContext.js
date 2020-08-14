import React, { useState } from "react"

export const PageContext = React.createContext();

export const PageContextProvider = ({ children }) => {
    const [page, setPage] = useState(0);

    return (
        <PageContext.Provider
            value={{ page: page, setPage: newPage => setPage(newPage) }}
        >
            {children}
        </PageContext.Provider>
    )
}

// export default ({ element }) => (
//     <PageContextProvider>{element}</PageContextProvider>
// )
