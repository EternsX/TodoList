import './IconList.css'
import { useEffect } from "react";

export default function IconList({ filteredIcons, selectedIcon, setSelectedIcon}) {
    useEffect(() => {
        const el = document.querySelector('.icon-item.selected');
        el?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }, [selectedIcon]);
    return (
        <div className="icon-row">
            {filteredIcons.map(item => (
              <button
                type="button"
                key={item.name}
                className={`icon-item ${selectedIcon?.name === item.name ? "selected" : ""}`}
                onClick={() => setSelectedIcon(selectedIcon?.name === item.name ? null : item)}
                title={item.name}
              >
                <span className="icon">{item.icon}</span>
                <span className="icon-name">{item.name}</span>
              </button>
            ))}
          </div>
    )
}
