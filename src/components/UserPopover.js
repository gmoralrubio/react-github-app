import { Popover, Transition } from '@headlessui/react'

export default function UserPopover({ user }) {
  return (
    <Popover className="relative">
      <p className="text-white">
        Hi,{' '}
        <Popover.Button className="font-bold underline">
          {user.name && user.name}
        </Popover.Button>
      </p>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        className="relative z-50"
      >
        <Popover.Panel className="absolute left-1/2 top-4 z-10 w-72 -translate-x-1/2 ">
          <div className="space-y-2 rounded bg-white p-4 shadow-md">
            <div className="flex items-center">
              {user.picture && (
                <img
                  className="mr-4 w-10 rounded-full"
                  src={user.picture}
                  alt={user.name}
                />
              )}
              <div className="text-sm">
                {user.name && <p className="whitespace-nowrap"> {user.name}</p>}
                {user.email && user.email !== user.name && <p> {user.email}</p>}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
