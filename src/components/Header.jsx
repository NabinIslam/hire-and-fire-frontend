'use client';

import { MegaMenu, Navbar } from 'flowbite-react';
import Button from './ui/Button';
import ReactFlagsSelect from 'react-flags-select';
import { useState } from 'react';

const Header = () => {
  const [selected, setSelected] = useState('US');

  return (
    <header>
      <nav>
        <MegaMenu>
          <div className="container flex flex-wrap items-center justify-between md:space-x-8">
            <Navbar.Brand href="/">
              <img alt="" src="/Logo.png" className="mr-3 h-6 sm:h-9" />
            </Navbar.Brand>
            <div className="order-2 hidden items-center md:flex gap-2">
              <Button>Contact Us</Button>
              <ReactFlagsSelect
                className="mb-[-5px]"
                showSelectedLabel={false}
                showOptionLabel={false}
                selected={selected}
                onSelect={code => setSelected(code)}
              />
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Navbar.Link href="#">About Us</Navbar.Link>
              <Navbar.Link>
                <MegaMenu.Dropdown toggle={<>Employers</>}>
                  <ul className="grid grid-cols-1">
                    <div className="space-y-4 p-4">
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Employer 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Employer 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Employer 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Employer 4
                        </a>
                      </li>
                    </div>
                  </ul>
                </MegaMenu.Dropdown>
              </Navbar.Link>
              <Navbar.Link>
                <MegaMenu.Dropdown toggle={<>Find Worker</>}>
                  <ul className="grid grid-cols-1">
                    <div className="space-y-4 p-4">
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Worker 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Worker 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Worker 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Worker 4
                        </a>
                      </li>
                    </div>
                  </ul>
                </MegaMenu.Dropdown>
              </Navbar.Link>
              <Navbar.Link href="#">Industry</Navbar.Link>
              <Navbar.Link>
                <MegaMenu.Dropdown toggle={<>Resources</>}>
                  <ul className="grid grid-cols-1">
                    <div className="space-y-4 p-4">
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Resource 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Resource 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Resource 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Resource 4
                        </a>
                      </li>
                    </div>
                  </ul>
                </MegaMenu.Dropdown>
              </Navbar.Link>
            </Navbar.Collapse>
          </div>
        </MegaMenu>
      </nav>
    </header>
  );
};

export default Header;
