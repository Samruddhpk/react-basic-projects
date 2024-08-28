import { useState, createContext, useContext } from "react";


const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return <AppContext.Provider value={{
        isModalOpen, isSidebarOpen, openModal, openSidebar, closeModal, closeSidebar
    }}>
        {children}
    </AppContext.Provider>;
};



export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };