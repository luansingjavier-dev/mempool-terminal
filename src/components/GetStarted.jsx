import React from "react";
import {
  python1,
  python6,
  python5,
  python2,
  git1,
  git2,
  git3,
  git4,
  git5,
  git6,
  git7,
  git8,
  git9,
  git10,
  git11,
  git12,
  git13,
  git14,
  git15,
  git16,
  git17,
} from "../constants/images";

const GetStarted = () => (
  <section id="get-started" className="mb-6 scroll-mt-32">
    <h2 className="h2 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Ready to Get Started?
    </h2>
    <ul className="list-disc pl-6 mt-2 space-y-2">
      <li className="font-normal text-[16px] text-n-4 my-5">
        Install Python (make sure that when you take the screenshot you click on
        the box that says "ADD to file path")
        <img
          src={python1}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Select the Install Now option for the recommended installation
        <img
          src={python2}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Select whether to disable the path length limit. Choosing this option
        will allow Python to bypass the 260-character MAX_PATH limit.{" "}
        <img
          src={python5}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
        The option will not affect any other system settings, and disabling it
        resolves potential name-length issues. We recommend selecting the option
        and closing the setup.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        The first way to verify that Python was installed successfully is
        through the command line. Open the command prompt and run the following
        command:
        <img
          src={python6}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
        The output shows the installed Python version.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Install Git
        <img
          src={git1}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
        Review the GNU General Public License, and when you are ready to
        install, click Next.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        The installer prompts you for an installation location. Leave the
        default one unless you want to change it, and click Next.
        <img
          src={git2}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        In the component selection screen, leave the defaults
        <p> unless you need to change them and click Next.</p>
        <img
          src={git3}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        The installer offers to create a start menu folder.{" "}
        <p>Click Next to accept and proceed to the next step.</p>
        <img
          src={git4}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Select a text editor you want to use with Git.{" "}
        <p>
          Use the drop-down menu to select Notepad++ (or whichever text editor
          you prefer) and click Next.
        </p>
        <img
          src={git5}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        The next step allows you to choose a different name for your initial
        branch.
        <p>
          The default is master. Unless you are working in a team that requires
          a different name, leave the default option and click Next.
        </p>
        <img
          src={git6}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        The next step allows you to change the PATH environment.{" "}
        <p>
          The PATH is the default set of directories included when you run a
          command from the command line.
        </p>{" "}
        Keep the middle (recommended) selection and click Next.
        <img
          src={git7}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        The installer prompts you to select the SSH client for Git to use.{" "}
        <p>
          Git already comes with its own SSH client, so if you don't need a
          specific one,{" "}
        </p>
        leave the default option and click Next.
        <img
          src={git8}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        The next option relates to server certificates.{" "}
        <p>The default option is recommended for most users.</p> If you work in
        an Active Directory environment,{" "}
        <p>
          you may need to switch to Windows Store certificates. Select your
          preferred option and click Next.
        </p>
        <img
          src={git9}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        The following selection configures line-ending conversion,{" "}
        <p>which relates to the way data is formatted. </p>The default selection
        is recommended for Windows. Click Next to proceed.
        <img
          src={git10}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Choose the terminal emulator you want to use.{" "}
        <p>
          The default MinTTY is recommended for its features. Click Next to
          continue.
        </p>
        <img
          src={git11}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        The next step allows you to choose what the git pull command will do.
        <p>
          The default option is recommended unless you specifically need to
          change its behavior.
        </p>{" "}
        Click Next to continue with the installation.
        <img
          src={git12}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        The next step is to choose which credential helper to use.{" "}
        <p>
          Git uses credential helpers to fetch or save credentials. The default
          option is the most stable one.
        </p>{" "}
        Select your preferred credential manager and click Next.
        <img
          src={git13}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        The next step lets you decide which extra options to enable. I
        <p>
          f you use symbolic links, which represent shortcuts for the command
          line, tick the box.
        </p>{" "}
        Keep file system caching checked and click Next.
        <img
          src={git14}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Depending on which Git version you are installing,
        <p>
          {" "}
          it may offer to install experimental features. At the time this
          article was written,
        </p>{" "}
        the installer offered options to include support for pseudo controls and
        a built-in file system monitor.{" "}
        <p>
          For the most stable operation, do not install experimental features
          and click Install.
        </p>
        <img
          src={git15}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Once the installation is complete, tick the boxes to view the Release
        Notes{" "}
        <p>
          or launch Git Bash if you want to start using Git right away, and
          click Finish.
        </p>
        <img
          src={git16}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        To check which Git version is installed on your system,{" "}
        <p>open the PowerShell and run the following command:</p>
        <img
          src={git17}
          alt="Third Image"
          className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
        />
        The output shows which Git version is installed on the system.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Clone repo{" "}
        <a
          href="https://github.com/madame-president/mempool-api-terminal"
          className="text-gradient"
        >
          (https://github.com/madame-president/mempool-api-terminal)
        </a>
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Install dependencies pip install -r requirements.txt
      </li>
    </ul>
  </section>
);

export default GetStarted;
