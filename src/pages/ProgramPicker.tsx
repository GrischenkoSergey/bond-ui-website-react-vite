import React from 'react';
import Layout from '../components/Layout';

const ProgramPicker: React.FC = () => {
    return (
        <Layout pageId="programpicker">
            <div className="sectionrowtext">
                <h2>Program Picker</h2>
                <p>
                    Program Picker is a fast and easy program launcher and task switcher, using just two consecutive keys to
                    launch and switch to up to 40 different programs and/or files.
                </p>
                <p>
                    Pin any file to any tile – pin up to 8,000 files and programs to Program Picker tiles –
                    access any of the first 1,600 with just four consecutive keypresses.
                </p>
                <p>
                    Includes: <br />
                    Program Launcher<br />
                    Task Switcher<br />
                    File Launcher <br />
                    Quick Snap – Window Resizer <br />
                    Switcher Mode – hold CTRL to switch between up to four programs <br />
                    Power User (Win X) Commands <br />
                    System Shut Down Window <br />
                    Tablet Mode (large tiles for touchscreens)
                </p>
            </div>
        </Layout>
    );
};

export default ProgramPicker;