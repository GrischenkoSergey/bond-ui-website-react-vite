import React from 'react';
import Layout from '../components/Layout';

const ProgramPicker: React.FC = () => {
    return (
        <Layout pageId="programpicker">
            <div className="sectionmanual">
                <h1>Program Picker</h1>

                <div className="program-picker-intro">
                    <h2>Overview</h2>
                    <p>
                        Program Picker is a fast and easy program launcher and task switcher, using just two consecutive keys to
                        launch and switch to up to 40 different programs and/or files.
                    </p>
                    <p>
                        Pin any file to any tile – pin up to 8,000 files and programs to Program Picker tiles –
                        access any of the first 1,600 with just four consecutive keypresses.
                    </p>
                </div>

                <div className="program-picker-features">
                    <h2>Features</h2>
                    <ul className="feature-list">
                        <li>Program Launcher</li>
                        <li>Task Switcher</li>
                        <li>File Launcher</li>
                        <li>Quick Snap – Window Resizer</li>
                        <li>Switcher Mode – hold CTRL to switch between up to four programs</li>
                        <li>Power User (Win X) Commands</li>
                        <li>System Shut Down Window</li>
                        <li>Tablet Mode (large tiles for touchscreens)</li>
                    </ul>
                </div>

                <div className="program-picker-details">
                    <h2>How It Works</h2>
                    <p>
                        Launch programs and switch between tasks quickly using intuitive keyboard shortcuts.
                        Program Picker provides an efficient workflow that saves time and reduces the need
                        to navigate through traditional menus.
                    </p>
                    <p>
                        The tile-based interface allows you to organize your most-used applications and
                        files exactly how you want them, creating a personalized workspace that adapts
                        to your needs.
                    </p>
                </div>

                <div className="program-picker-cta">
                    <p>
                        Experience faster, more efficient program management with Program Picker.
                        Perfect for power users and anyone looking to streamline their workflow.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default ProgramPicker;