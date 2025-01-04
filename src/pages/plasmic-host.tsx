import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
  registerFunction,
  registerGlobalContext,
} from "@plasmicapp/react-web/lib/host";
import { Fragment, fragmentMeta } from "@/fragment/fragment";
import { GrowthBook, growthBookMeta } from "@/fragment/growthbook";
import { DatePicker, datePickerMeta } from "@/fragment/components/date-picker";
import { TimePicker, timePickerMeta } from "@/fragment/components/time-picker";
import { Splunk, splunkMeta } from "@/fragment/splunk";
import { Popover, popoverMeta } from "@/fragment/components/popover";
import { Select, selectMeta } from "@/fragment/components/select";
import { Input, inputMeta } from "@/fragment/components/input";
import { Switch, switchMeta } from "@/fragment/components/switch";
import { ApiRequest, apiRequestMeta } from "@/fragment/components/api-request";
import { Slider, sliderMeta } from "@/fragment/components/slider";
import { Chart, chartMeta } from "@/fragment/components/chart";
import { Hamdast, hamdastMeta } from "@/hamdast/hamdast";
import { TextEditor, TextEditorMeta } from "@/fragment/components/text-editor";
import { FileInput, fileInputMeta } from "@/fragment/components/file-input";
import Map, { mapMeta } from "@/fragment/components/map";
import moment from "jalali-moment";
export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
registerGlobalContext(Fragment, fragmentMeta);
registerGlobalContext(GrowthBook, growthBookMeta);
registerGlobalContext(Splunk, splunkMeta);
registerGlobalContext(Hamdast, hamdastMeta);
registerComponent(DatePicker, datePickerMeta);
registerComponent(TimePicker, timePickerMeta);
registerComponent(Popover, popoverMeta);
registerComponent(Select, selectMeta);
registerComponent(Input, inputMeta);
registerComponent(Switch, switchMeta);
registerComponent(Slider, sliderMeta);
registerComponent(ApiRequest, apiRequestMeta);
registerComponent(Chart, chartMeta);
registerComponent(TextEditor, TextEditorMeta);
registerComponent(FileInput, fileInputMeta);
registerComponent(Map, mapMeta);
registerFunction(moment, {
  name: "moment",
  importPath: "jalali-moment",
});
