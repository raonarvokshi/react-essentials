function TabButton({ children, onSelect, isSelected }) {
    let setClass;
    if (isSelected) {
        setClass = "active"
    }

    return (
        <li>
            <button className={setClass} onClick={onSelect}>{children}</button>
        </li>
    );
}

export default TabButton;