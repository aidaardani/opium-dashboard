import { CodeComponentMeta } from '@plasmicapp/host';
import React, { MouseEventHandler } from 'react';

import Select, {
  components,
  MultiValueGenericProps,
  MultiValueProps,
  Props,
} from 'react-select';
import {
  SortableContainer,
  SortableContainerProps,
  SortableElement,
  SortEndHandler,
  SortableHandle,
} from 'react-sortable-hoc';


function arrayMove<T>(array: readonly T[], from: number, to: number) {
  const slicedArray = array.slice();
  slicedArray.splice(
    to < 0 ? array.length + to : to,
    0,
    slicedArray.splice(from, 1)[0]
  );
  return slicedArray;
}

const SortableMultiValue = SortableElement(
  (props: MultiValueProps) => {
    // this prevents the menu from being opened/closed when the user clicks
    // on a value to begin dragging it. ideally, detecting a click (instead of
    // a drag) would still focus the control and toggle the menu, but that
    // requires some magic with refs that are out of scope for this example
    const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const innerProps = { ...props.innerProps, onMouseDown };
    return <components.MultiValue {...props} innerProps={innerProps} />;
  }
);

const SortableMultiValueLabel = SortableHandle(
  (props: MultiValueGenericProps) => <components.MultiValueLabel {...props} />
);

const SortableSelect = SortableContainer(Select) as React.ComponentClass<
  Props<any, true> & SortableContainerProps
>;

export default function MultiSelect(props:any) {
  const {options, onChange, value,placeholder,disabled }= props
  const [selected, setSelected] = React.useState<readonly any[]>([]);



  const onSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
    const newValue = arrayMove(selected, oldIndex, newIndex);
    setSelected(newValue);
    console.log(
      'Values sorted:',
      newValue.map((i) => i.value)
    );
  };

  return (
    <SortableSelect
      useDragHandle
      axis="xy"
      placeholder={placeholder}
      isDisabled={disabled}
      scrol
      onSortEnd={onSortEnd}
      distance={4}
      getHelperDimensions={({ node }) => node.getBoundingClientRect()}
      isMulti
      options={options}
      value={value}
      onChange={onChange}
      components={{
        // @ts-ignore We're failing to provide a required index prop to SortableElement
        MultiValue: SortableMultiValue,
        // @ts-ignore We're failing to provide a required index prop to SortableElement
        MultiValueLabel: SortableMultiValueLabel,
      }}
      closeMenuOnSelect={false}
    />
  );
}



export const multiSelectMeta: CodeComponentMeta<any> = {
  name: "MultiSlect",
  displayName: "Fragment/MultiSlect",
  importPath: "@/fragment/components/multi-select",
  figmaMappings: [{ figmaComponentName: "MultiSlect" }],
  props: {
    placeholder: "string",
    onChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "value",
          type: "object",
        },
      ],
    },
    value: {
      type: "choice",
      multiSelect:true,
      displayName: "Selected value",
      description: "Initial selected option",
      options: (ps:any) => {
        const rec = (op: any) => {
          if (typeof op === "string") {
            return [{ value: op, label: op }];
          } else {
            return [{ value: op.value, label: op.label || op.value }];
          }
        };
        return (ps.options ?? []).flatMap((o: any) => rec(o));
      },
    },
    options: {
      type: "array",
      itemType: {
        type: "object",
        nameFunc: (item: any) => item?.label ?? item?.value,
        fields: {
          label: {
            type: "string",
            description:
              "If you want to show a different value to the user than the Value, you can optionally specify a label.",
          },
          value: {
            type: "string",
            description:
              "Value that identifies this option. Will also be the value shown to the user, unless you specify a Label.",
          },
          disabled: {
            type: "boolean",
            advanced: true,
          },
        },
        defaultValue: [
          {
            label: "Option 1",
            value: "option1",
          },
          {
            label: "Option 2",
            value: "option2",
          },
        ],
        exprHint:
          'An array of items, like `["Option1", "Option2"]`, or an array of objects with `value`, `label`, or `disabled`, like `[{value: "usa", label: "United States"}, {value: "bra", label: "Brazil"}]`',
      },
    },
    disabled: "boolean"
  },
  classNameProp: "triggerClassName",
  defaultStyles: {
    width: "stretch",
  },
  states: {
    value: {
      type: "writable",
      variableType: "array",
      valueProp: "value",
      onChangeProp: "onChange",
    },
  },
};
