"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {Tabs, TabsContent} from "@/components/ui/tabs";
import {useEditor} from "@/providers/editor/editor-provider";
import clsx from "clsx";
import React from "react";
import TabList from "./tabs";
import SettingsTab from "./settings-tab";
import MediaBucketTab from "./tabs/media-bucket-tab";
import ComponentsTab from "./tabs/components-tab";
