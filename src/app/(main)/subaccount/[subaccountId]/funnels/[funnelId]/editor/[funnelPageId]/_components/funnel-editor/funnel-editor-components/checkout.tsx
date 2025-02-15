"use client";
import Loading from "@/components/global/loading";
import {Badge} from "@/components/ui/badge";
import {toast} from "@/components/ui/use-toast";
import {EditorBtns} from "@/lib/constants";
import {getFunnel, getSubaccountDetails} from "@/lib/queries";
import {getStripe} from "@/lib/stripe/stripe-client";
import {EditorElement, useEditor} from "@/providers/editor/editor-provider";
