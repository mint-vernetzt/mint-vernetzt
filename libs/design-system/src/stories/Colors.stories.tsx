import { Meta, Story } from "@storybook/react";
import { colors } from "../theme";

export const Colors: Story = () => {
  return (
    <div className="min-w-max max-w-4xl">
      <div className="grid grid-cols-5 gap-2 w-full">
        <div className="flex items-center">
          <div className="flex-none bg-primary w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">primary</p>
            <p className="text-sm">{colors.primary}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-secondary w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">secondary</p>
            <p className="text-sm">{colors.secondary}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-fill w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">fill</p>
            <p className="text-sm">{colors.fill}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 w-full">
        <div></div>
        <div className="flex items-center">
          <div className="flex-none bg-secondary-light w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">secondary-light</p>
            <p className="text-sm">{colors["secondary-light"]}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 w-full">
        <div className="flex items-center">
          <div className="flex-none bg-success w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">success</p>
            <p className="text-sm">{colors.success}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-warning w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">warning</p>
            <p className="text-sm">{colors.warning}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-danger w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">danger</p>
            <p className="text-sm">{colors.danger}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 w-full">
        <div className="flex items-center">
          <div className="flex-none bg-success-light w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">success-light</p>
            <p className="text-sm">{colors["success-light"]}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-warning-light w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">warning-light</p>
            <p className="text-sm">{colors["warning-light"]}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-danger-light w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">danger-light</p>
            <p className="text-sm">{colors["danger-light"]}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 w-full">
        <div className="flex items-center">
          <div className="flex-none bg-neutral-900 w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">neutral-900</p>
            <p className="text-sm">{colors["neutral-900"]}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-neutral-800 w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">neutral-800</p>
            <p className="text-sm">{colors["neutral-800"]}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-neutral-700 w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">neutral-700</p>
            <p className="text-sm">{colors["neutral-700"]}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-neutral-600 w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">neutral-600</p>
            <p className="text-sm">{colors["neutral-600"]}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-neutral-500 w-1 h-1 p-4 mr-1 rounded-md border border-transparent"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">neutral-500</p>
            <p className="text-sm">{colors["neutral-500"]}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 w-full">
        <div className="flex items-center">
          <div className="flex-none bg-neutral-400 w-1 h-1 p-4 mr-1 rounded-md border border-neutral-500"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">neutral-400</p>
            <p className="text-sm">{colors["neutral-400"]}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-neutral-300 w-1 h-1 p-4 mr-1 rounded-md border border-neutral-500"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">neutral-300</p>
            <p className="text-sm">{colors["neutral-300"]}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-neutral-200 w-1 h-1 p-4 mr-1 rounded-md border border-neutral-500"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">neutral-200</p>
            <p className="text-sm">{colors["neutral-200"]}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-none bg-neutral-100 w-1 h-1 p-4 mr-1 rounded-md border border-neutral-500"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">neutral-100</p>
            <p className="text-sm">{colors["neutral-100"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  title: "Style Guide/Colors",
  parameters: {
    controls: { disable: true },
    actions: {
      disable: true,
    },
  },
} as Meta;
