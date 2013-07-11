package io.trigger.forge.android.modules.version;

import io.trigger.forge.android.core.ForgeTask;

import com.google.gson.JsonPrimitive;

public class API {
  public static void getAPILevel(final ForgeTask task) {
    task.success(new JsonPrimitive(android.os.Build.VERSION.SDK_INT));
  }

  public static void getVersionString(final ForgeTask task) {
    task.success(new JsonPrimitive(android.os.Build.VERSION.RELEASE));
  }

  public static void getDeviceName(final ForgeTask task) {
    task.success(new JsonPrimitive(android.os.Build.MODEL));
  }
}